import type { Meta, StoryObj } from '@storybook/react-vite';
import { designTokens } from '../../config/design-tokens';

const DesignSystemOverview = () => {
  return (
    <div className="p-8 bg-white">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-display-28 font-bold text-gray-900 mb-4">
          SATTO Design System
        </h1>
        <p className="text-text-18 text-gray-600 max-w-3xl">
          SATTO 프로젝트를 위한 통합 디자인 시스템입니다. 
          Figma 디자인을 기반으로 일관된 사용자 경험을 제공합니다.
        </p>
      </div>

      {/* Typography Section */}
      <section className="mb-16">
        <h2 className="text-display-24 font-semibold text-gray-900 mb-6">
          Typography
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-text-16 font-semibold text-gray-700 mb-4">Display Styles</h3>
            <div className="space-y-3">
              <div className="text-display-28 font-bold text-gray-900">Display 28 - Bold</div>
              <div className="text-display-26 font-semibold text-gray-900">Display 26 - Semibold</div>
              <div className="text-display-24 font-medium text-gray-900">Display 24 - Medium</div>
              <div className="text-display-22 font-regular text-gray-900">Display 22 - Regular</div>
              <div className="text-display-20 font-regular text-gray-900">Display 20 - Regular</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-text-16 font-semibold text-gray-700 mb-4">Text Styles</h3>
            <div className="space-y-2">
              <div className="text-text-18 font-semibold text-gray-900">Text 18 - Semibold</div>
              <div className="text-text-16 font-medium text-gray-900">Text 16 - Medium</div>
              <div className="text-text-14 font-regular text-gray-900">Text 14 - Regular</div>
              <div className="text-text-12 font-regular text-gray-600">Text 12 - Regular</div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Section */}
      <section className="mb-16">
        <h2 className="text-display-24 font-semibold text-gray-900 mb-6">
          Color Palette
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Primary Colors */}
          <div>
            <h3 className="text-text-16 font-semibold text-gray-700 mb-4">Primary (Red)</h3>
            <div className="space-y-2">
              {Object.entries(designTokens.colors.primary).slice(0, 5).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-text-14 text-gray-900">primary-{shade}</span>
                  <span className="text-text-12 text-gray-500 font-mono">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gray Colors */}
          <div>
            <h3 className="text-text-16 font-semibold text-gray-700 mb-4">Gray Scale</h3>
            <div className="space-y-2">
              {Object.entries(designTokens.colors.gray).slice(0, 5).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-text-14 text-gray-900">gray-{shade}</span>
                  <span className="text-text-12 text-gray-500 font-mono">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Purple Colors */}
          <div>
            <h3 className="text-text-16 font-semibold text-gray-700 mb-4">Purple (Secondary)</h3>
            <div className="space-y-2">
              {Object.entries(designTokens.colors.purple).slice(0, 5).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-text-14 text-gray-900">purple-{shade}</span>
                  <span className="text-text-12 text-gray-500 font-mono">{color}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className="mb-16">
        <h2 className="text-display-24 font-semibold text-gray-900 mb-6">
          Spacing System
        </h2>
        <div className="space-y-4">
          {Object.entries(designTokens.spacing).slice(0, 8).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4">
              <div className="w-16 text-text-14 text-gray-700">
                spacing-{key}
              </div>
              <div 
                className="bg-primary-200 h-4"
                style={{ width: value }}
              />
              <span className="text-text-12 text-gray-500 font-mono">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius Section */}
      <section className="mb-16">
        <h2 className="text-display-24 font-semibold text-gray-900 mb-6">
          Border Radius
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(designTokens.borderRadius).slice(0, 8).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-16 h-16 bg-primary-100 border-2 border-primary-300 mx-auto mb-2"
                style={{ borderRadius: value }}
              />
              <div className="text-text-12 text-gray-700">radius-{key}</div>
              <div className="text-text-12 text-gray-500 font-mono">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Shadow Section */}
      <section>
        <h2 className="text-display-24 font-semibold text-gray-900 mb-6">
          Shadows
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(designTokens.shadows).map(([key, value]) => (
            <div key={key} className="text-center">
              <div 
                className="w-24 h-24 bg-white rounded-lg mx-auto mb-3"
                style={{ boxShadow: value }}
              />
              <div className="text-text-14 text-gray-700">shadow-{key}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof DesignSystemOverview> = {
  title: 'Design System/Overview',
  component: DesignSystemOverview,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'SATTO 디자인 시스템의 전체 개요를 보여줍니다. 타이포그래피, 색상, 간격, 그림자 등 모든 디자인 토큰을 한눈에 확인할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DesignSystemOverview>;

export const Default: Story = {
  args: {},
};

// 개별 섹션 스토리들
export const TypographyShowcase: Story = {
  render: () => (
    <div className="p-8 bg-white">
      <h1 className="text-display-28 font-bold text-gray-900 mb-8">Typography Showcase</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-display-22 font-semibold text-gray-900 mb-4">Display Styles</h2>
          <div className="space-y-4">
            <div className="text-display-28 font-bold text-gray-900">
              큰 제목을 위한 Display 28
            </div>
            <div className="text-display-24 font-semibold text-gray-900">
              섹션 제목을 위한 Display 24
            </div>
            <div className="text-display-20 font-medium text-gray-900">
              카드 제목을 위한 Display 20
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-display-22 font-semibold text-gray-900 mb-4">Text Styles</h2>
          <div className="space-y-3">
            <p className="text-text-18 text-gray-900">
              본문 텍스트를 위한 Text 18 - 중요한 내용이나 강조할 때 사용합니다.
            </p>
            <p className="text-text-16 text-gray-900">
              기본 본문 텍스트를 위한 Text 16 - 일반적인 본문 내용에 사용합니다.
            </p>
            <p className="text-text-14 text-gray-600">
              보조 텍스트를 위한 Text 14 - 부가 설명이나 메타 정보에 사용합니다.
            </p>
            <p className="text-text-12 text-gray-500">
              캡션이나 라벨을 위한 Text 12 - 작은 정보나 라벨에 사용합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorUsageGuide: Story = {
  render: () => (
    <div className="p-8 bg-white">
      <h1 className="text-display-28 font-bold text-gray-900 mb-8">Color Usage Guide</h1>
      
      <div className="space-y-12">
        <div>
          <h2 className="text-display-22 font-semibold text-gray-900 mb-6">Primary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary-50 rounded-lg border border-primary-200">
              <h3 className="text-text-18 font-semibold text-primary-800 mb-2">Main Actions</h3>
              <p className="text-text-14 text-primary-700">
                primary-500 (#F34854)를 주요 액션 버튼과 중요한 UI 요소에 사용합니다.
              </p>
            </div>
            <div className="p-6 bg-primary-100 rounded-lg border border-primary-200">
              <h3 className="text-text-18 font-semibold text-primary-800 mb-2">Hover States</h3>
              <p className="text-text-14 text-primary-700">
                primary-600을 호버 상태에, primary-700을 액티브 상태에 사용합니다.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-display-22 font-semibold text-gray-900 mb-6">Gray Scale Usage</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gray-900 rounded"></div>
              <div>
                <div className="text-text-14 font-semibold text-gray-900">gray-900</div>
                <div className="text-text-12 text-gray-600">주요 텍스트, 제목</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gray-600 rounded"></div>
              <div>
                <div className="text-text-14 font-semibold text-gray-900">gray-600</div>
                <div className="text-text-12 text-gray-600">보조 텍스트, 설명</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gray-200 rounded border border-gray-300"></div>
              <div>
                <div className="text-text-14 font-semibold text-gray-900">gray-200</div>
                <div className="text-text-12 text-gray-600">테두리, 구분선</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
