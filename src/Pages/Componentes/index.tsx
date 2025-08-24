import React, { useState } from "react";
import {
  BoxShadow,
  Button,
  ButtonGroup,
  Icon,
  InputPassword,
  InputText,
  Loader,
  SelectCustom,
  Textarea,
} from "@Components/atoms";
import {
  Alert,
  KPICard,
  Modal,
  Pagination,
  Table,
  Tabs,
} from "@Components/organisms";

/**
 * Simple in-app documentation playground that renders each component with:
 * - Live preview
 * - Toggle-able code snippet
 * - Short notes & prop tips
 *
 * No external libs are required; styling uses Tailwind classes.
 */

// --- Small doc helpers -------------------------------------------------------
const Section: React.FC<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}> = ({ title, subtitle, children }) => (
  <section className="max-w-6xl mx-auto mb-12">
    <header className="mb-4">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </header>
    <div className="grid gap-4">{children}</div>
  </section>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={
      "rounded-2xl border border-gray-200/70 bg-white shadow-sm " +
      (className ?? "")
    }
  >
    {children}
  </div>
);

const CardHeader: React.FC<{
  title: string;
  description?: string;
  right?: React.ReactNode;
}> = ({ title, description, right }) => (
  <div className="flex items-start justify-between p-4 border-b border-gray-100">
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      {description && (
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      )}
    </div>
    {right}
  </div>
);

const CardBody: React.FC<{ children: React.ReactNode; padded?: boolean }> = ({
  children,
  padded = true,
}) => <div className={padded ? "p-4" : ""}>{children}</div>;

const ToggleButton: React.FC<{ onClick: () => void; active?: boolean }> = ({
  onClick,
  active,
}) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition ${
      active
        ? "border-blue-500 text-blue-600"
        : "border-gray-300 text-gray-600 hover:border-gray-400"
    }`}
    aria-pressed={active}
  >
    <i className="fas fa-code" />
    {active ? "Ocultar código" : "Ver código"}
  </button>
);

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch (err) {
          console.error("Failed to copy text:", err);
        }
      }}
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs transition ${
        copied
          ? "border-green-500 text-green-600"
          : "border-gray-300 text-gray-600 hover:border-gray-400"
      }`}
      title="Copiar"
    >
      <i className="fas fa-copy" /> {copied ? "Copiado" : "Copiar"}
    </button>
  );
};

const CodeBlock: React.FC<{ code: string; language?: string }> = ({
  code,
  language = "tsx",
}) => (
  <pre className="relative overflow-x-auto rounded-xl bg-gray-900 text-gray-100 text-[12.5px] leading-relaxed">
    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 text-[11px] uppercase tracking-wider text-gray-400">
      <span>{language}</span>
      <CopyButton text={code} />
    </div>
    <code className="block p-3 whitespace-pre">{code}</code>
  </pre>
);

const jsx = (strings: TemplateStringsArray, ...expr: unknown[]) =>
  strings.reduce((acc, s, i) => acc + s + (expr[i] ?? ""), "").trim();

export const Componentes = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("tab1");
  const totalPages = 5;

  const pageHeader = (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white mb-10">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          Documentación de Componentes
        </h1>
        <p className="mt-2 text-white/90">
          Vista rápida de los átomos y organismos con ejemplos y snippets listos
          para copiar.
        </p>

        <div className="mt-4 text-xs text-white/80">
        
          <span>
            Generado por <strong>houdini-21 🎩</strong>
          </span>
        </div>
      </div>
    </div>
  );

  // --- Code snippets ---------------------------------------------------------
  const snippetBoxShadow = jsx`
  <BoxShadow background="white-500" padding="4" marginBottom="5">
    BoxShadow component
  </BoxShadow>`;

  const snippetButtons = jsx`
  <div className="flex gap-3">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="custom" styleClasses="bg-green-500 text-white">Custom</Button>
  </div>`;

  const snippetButtonGroup = jsx`
  <ButtonGroup
    value={selectedOption}
    onChange={(val) => setSelectedOption(val as string)}
    styleClasses="w-64"
    items={[
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
      { label: "Option 4", value: "option4" },
    ]}
  />`;

  const snippetInputs = jsx`
  <div className="flex flex-wrap gap-4">
    <InputText name="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <InputText name="username" placeholder="With icon" value={username} icon="fas fa-user" onChange={(e) => setUsername(e.target.value)} />
    <InputText name="username" placeholder="With error" value={username} icon="fas fa-user" error errorMessage="Invalid username" onChange={(e) => setUsername(e.target.value)} />
    <InputText name="username" placeholder="Disabled" value={username} icon="fas fa-user" disabled onChange={(e) => setUsername(e.target.value)} />
  </div>`;

  const snippetPasswords = jsx`
  <div className="flex flex-wrap gap-4">
    <InputPassword name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <InputPassword name="confirmPassword" placeholder="Confirm your password" value={password} error errorMessage="Passwords do not match" onChange={(e) => setPassword(e.target.value)} />
    <InputPassword name="disabled" placeholder="Disabled" value={password} disabled onChange={(e) => setPassword(e.target.value)} />
  </div>`;

  const snippetTextarea = jsx`
  <div className="flex flex-wrap gap-4">
    <Textarea name="message" placeholder="Enter your message" value={username} onChange={(e) => setUsername(e.target.value)} />
    <Textarea name="message" placeholder="Disabled" value={username} disabled onChange={(e) => setUsername(e.target.value)} />
    <Textarea name="message" placeholder="With error" value={username} error errorMessage="Message is required" onChange={(e) => setUsername(e.target.value)} />
  </div>`;

  const snippetLoader = jsx`<Loader size={90} color="blue-500" visible />`;

  const snippetSelect = jsx`
  <SelectCustom
    placeholder="Select an option"
    name="customSelect"
    options={[
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ]}
    value={selectedOption}
    onChange={(value) => setSelectedOption(value as string)}
  />`;

  const snippetAlert = jsx`
  <>
    <Button onClick={() => setAlertVisible(true)}>Show Alert</Button>
    <Alert
      visible={alertVisible}
      iconColor="red-500"
      icon="fas fa-exclamation-triangle"
      title="Alert Title"
      comment="This is an alert comment."
      onClose={() => setAlertVisible(false)}
      onSave={() => setAlertVisible(false)}
    />
  </>`;

  const snippetKpi = jsx`
  <div className="flex gap-4">
    <KPICard title="KPI Card Title" primaryText="1234" secondaryText="This is a KPI card description." withArrowIcon arrowDirection="up" />
    <KPICard title="KPI Card Title" primaryText="1234" secondaryText="This is a KPI card description." withArrowIcon arrowDirection="down" />
  </div>`;

  const snippetModal = jsx`
  <>
    <Button onClick={() => setModalVisible(true)}>Show Modal</Button>
    <Modal
      visible={modalVisible}
      title="Modal Title"
      onClose={() => setModalVisible(false)}
      onSave={() => setModalVisible(false)}
    >
      <p>This is the modal content.</p>
    </Modal>
  </>`;

  const snippetPagination = jsx`
  <Pagination
    setPage={setCurrentPage}
    pageCount={${totalPages}}
    initialPage={currentPage - 1}
    pagesToShowStart={3}
    pagesToShowEnd={3}
  />`;

  const snippetTable = jsx`
  <Table
    columns={[
      { key: "col1", name: "Column 1", width: 250, sortable: true },
      { key: "col2", name: "Column 2", width: 150, sortable: true },
      { key: "col3", name: "Column 3", width: 150, sortable: true },
    ]}
    loading // propiedad opcional que muestra un loading antes de la data
    rows={[
      { col1: "Data 1", col2: "Data 2", col3: "Data 3" },
      { col1: "Data 4", col2: "Data 5", col3: "Data 6" },
      { col1: "Data 7", col2: "Data 8", col3: "Data 9" },
      { col1: "Data 10", col2: "Data 11", col3: "Data 12" },
    ]}
  />`;

  const snippetTabs = jsx`
  <Tabs
    activeTab={activeTab}
    setActiveTab={(item) => setActiveTab(item as string)}
    tabs=[
      { id: "tab1", name: "Tab 1", disabled: false },
      { id: "tab2", name: "Tab 2", disabled: false },
      { id: "tab3", name: "Tab 3", disabled: true },
    ]
  />`;

  // Utility to render a doc card with code toggle
  const DocItem: React.FC<{
    title: string;
    description?: string;
    preview: React.ReactNode;
    code: string;
  }> = ({ title, description, preview, code }) => {
    const [showCode, setShowCode] = useState(false);
    return (
      <Card>
        <CardHeader
          title={title}
          description={description}
          right={
            <ToggleButton
              onClick={() => setShowCode((s) => !s)}
              active={showCode}
            />
          }
        />
        <CardBody>
          <div className="mb-3">{preview}</div>
          {showCode && <CodeBlock code={code} />}
        </CardBody>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {pageHeader}

      {/* ATOMS */}
      <Section title="Átomos" subtitle="Elementos básicos reutilizables">
        <DocItem
          title="BoxShadow"
          description="Contenedor con padding, background y sombra."
          preview={
            <BoxShadow background="white-500" padding="4" marginBottom="5">
              BoxShadow component
            </BoxShadow>
          }
          code={snippetBoxShadow}
        />

        <DocItem
          title="Button"
          description="Soporta variantes: primary, secondary, danger y custom via className."
          preview={
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" styleClasses="w-32">
                Primary
              </Button>
              <Button variant="secondary" styleClasses="w-32">
                Secondary
              </Button>
              <Button variant="danger" styleClasses="w-32">
                Danger
              </Button>
              <Button
                variant="custom"
                styleClasses="w-32 bg-green-500 text-white"
              >
                Custom
              </Button>
            </div>
          }
          code={snippetButtons}
        />

        <DocItem
          title="ButtonGroup"
          description="Grupo exclusivo (one-of) con items {label,value}."
          preview={
            <ButtonGroup
              value={selectedOption}
              onChange={(v) => setSelectedOption(v as string)}
              styleClasses="w-64"
              items={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
                { label: "Option 3", value: "option3" },
                { label: "Option 4", value: "option4" },
              ]}
            />
          }
          code={snippetButtonGroup}
        />

        <DocItem
          title="Icon"
          description="Usa clases FontAwesome (o similares)."
          preview={<Icon name="fas fa-home" color="blue-500" />}
          code={`<Icon name="fas fa-home" color="blue-500" />`}
        />

        <DocItem
          title="InputText"
          description="Estados: normal, con icono, error y disabled."
          preview={
            <div className="flex flex-wrap gap-4">
              <InputText
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputText
                name="username"
                placeholder="Enter your username"
                value={username}
                icon="fas fa-user"
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputText
                name="username"
                placeholder="Enter your username"
                value={username}
                icon="fas fa-user"
                error
                errorMessage="Invalid username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputText
                name="username"
                placeholder="Enter your username"
                value={username}
                disabled
                icon="fas fa-user"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          }
          code={snippetInputs}
        />

        <DocItem
          title="InputPassword"
          description="Con validación de error y estado disabled."
          preview={
            <div className="flex flex-wrap gap-4">
              <InputPassword
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputPassword
                name="confirmPassword"
                placeholder="Confirm your password"
                value={password}
                error
                errorMessage="Passwords do not match"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputPassword
                name="confirmPassword"
                placeholder="Confirm your password"
                value={password}
                disabled
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          }
          code={snippetPasswords}
        />

        <DocItem
          title="Textarea"
          description="Multi-línea con error y disabled."
          preview={
            <div className="flex flex-wrap gap-4">
              <Textarea
                name="message"
                placeholder="Enter your message"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Textarea
                name="message"
                placeholder="Enter your message"
                value={username}
                disabled
                onChange={(e) => setUsername(e.target.value)}
              />
              <Textarea
                name="message"
                placeholder="Enter your message"
                value={username}
                error
                errorMessage="Message is required"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          }
          code={snippetTextarea}
        />

        <DocItem
          title="Loader"
          description="Spinner con tamaño y color."
          preview={<Loader size={90} color="blue-500" visible />}
          code={snippetLoader}
        />

        <DocItem
          title="SelectCustom"
          description="Select controlado con onChange(value)."
          preview={
            <SelectCustom
              placeholder="Select an option"
              name="customSelect"
              options={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
                { label: "Option 3", value: "option3" },
              ]}
              value={selectedOption}
              onChange={(v) => setSelectedOption(v as string)}
              styleClasses="max-w-[22rem]"
            />
          }
          code={snippetSelect}
        />
      </Section>

      {/* ORGANISMS */}
      <Section
        title="Organismos"
        subtitle="Componentes compuestos y con estado"
      >
        <DocItem
          title="Alert"
          description="Diálogo ligero con acciones onClose / onSave."
          preview={
            <div className="flex items-center gap-3">
              <Button onClick={() => setAlertVisible(true)}>Show Alert</Button>
              <span className="text-sm text-gray-500">
                Visible: {String(alertVisible)}
              </span>
              <Alert
                visible={alertVisible}
                iconColor="red-500"
                icon="fas fa-exclamation-triangle"
                title="Alert Title"
                comment="This is an alert comment."
                onClose={() => setAlertVisible(false)}
                onSave={() => setAlertVisible(false)}
              />
            </div>
          }
          code={snippetAlert}
        />

        <DocItem
          title="KPI Card"
          description="Indicadores con flecha up/down opcional."
          preview={
            <div className="flex flex-wrap gap-4">
              <KPICard
                title="KPI Card Title"
                primaryText="1234"
                secondaryText="This is a KPI card description."
                withArrowIcon
                arrowDirection="up"
              />
              <KPICard
                title="KPI Card Title"
                primaryText="1234"
                secondaryText="This is a KPI card description."
                withArrowIcon
                arrowDirection="down"
              />
            </div>
          }
          code={snippetKpi}
        />

        <DocItem
          title="Modal"
          description="Contenedor modal controlado (visible)."
          preview={
            <>
              <Button onClick={() => setModalVisible(true)}>Show Modal</Button>
              <Modal
                visible={modalVisible}
                title="Modal Title"
                onClose={() => setModalVisible(false)}
                onSave={() => setModalVisible(false)}
              >
                <p>This is the modal content.</p>
              </Modal>
            </>
          }
          code={snippetModal}
        />

        <DocItem
          title="Pagination"
          description="Control paginador, usa setPage(page)."
          preview={
            <Pagination
              setPage={setCurrentPage}
              pageCount={totalPages}
              initialPage={currentPage - 1}
              pagesToShowStart={3}
              pagesToShowEnd={3}
            />
          }
          code={snippetPagination}
        />

        <DocItem
          title="Table"
          description="Tabla con columnas (sortable) y estado de carga."
          preview={
            <div className="flex flex-wrap gap-4">
              <Table
                columns={[
                  { key: "col1", name: "Column 1", width: 250, sortable: true },
                  { key: "col2", name: "Column 2", width: 150, sortable: true },
                  { key: "col3", name: "Column 3", width: 150, sortable: true },
                ]}
                rows={[
                  { col1: "Data 1", col2: "Data 2", col3: "Data 3" },
                  { col1: "Data 4", col2: "Data 5", col3: "Data 6" },
                  { col1: "Data 7", col2: "Data 8", col3: "Data 9" },
                  { col1: "Data 10", col2: "Data 11", col3: "Data 12" },
                ]}
              />
              <Table
                loading
                columns={[
                  { key: "col1", name: "Column 1", width: 150, sortable: true },
                  { key: "col2", name: "Column 2", width: 150, sortable: true },
                  { key: "col3", name: "Column 3", width: 150, sortable: true },
                ]}
                rows={[
                  { col1: "Data 1", col2: "Data 2", col3: "Data 3" },
                  { col1: "Data 4", col2: "Data 5", col3: "Data 6" },
                  { col1: "Data 7", col2: "Data 8", col3: "Data 9" },
                  { col1: "Data 10", col2: "Data 11", col3: "Data 12" },
                ]}
              />
            </div>
          }
          code={snippetTable}
        />

        <DocItem
          title="Tabs"
          description="Tabs controladas con activeTab y setActiveTab."
          preview={
            <Tabs
              activeTab={activeTab}
              setActiveTab={(item) => setActiveTab(item as string)}
              tabs={[
                { id: "tab1", name: "Tab 1", disabled: false },
                { id: "tab2", name: "Tab 2", disabled: false },
                { id: "tab3", name: "Tab 3", disabled: true },
              ]}
            />
          }
          code={snippetTabs}
        />
      </Section>

      <footer className="max-w-6xl mx-auto px-5 pb-10 text-xs text-gray-500">
        <p>
          ⚙️ Tip: Usa el botón ver codigo en cada tarjeta para copiar el snippet
          exacto del ejemplo.
        </p>
      </footer>
    </div>
  );
}
